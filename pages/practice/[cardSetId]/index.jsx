import { DataStore } from 'aws-amplify';
import { SortDirection } from "@aws-amplify/datastore";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import {
  createDataStorePredicate,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import "@aws-amplify/ui-react/styles.css";
import Amplify, { Predictions } from "aws-amplify";
import mic from "microphone-stream";
import { useRouter } from "next/router";
import { useState } from "react";
import awsExports from "../../../src/aws-exports";
import { Card } from "../../../src/models";
import CardViewCollection from "../../../src/ui-components/CardViewCollection";

Amplify.configure(awsExports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

const Home = () => {
  const router = useRouter();
  const { cardSetId } = router.query;
  // console.log(cardSetId);

  const [wordInData, setWordInData] = useState("");
  const [response, setResponse] = useState("_ _ _ _");
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(false);
  const [micStream, setMicStream] = useState();
  const [audioBuffer] = useState(
    (function () {
      let buffer = [];
      function add(raw) {
        buffer = buffer.concat(...raw);
        return buffer;
      }
      function newBuffer() {
        console.log("resetting buffer");
        buffer = [];
      }

      return {
        reset: function () {
          newBuffer();
        },
        addData: function (raw) {
          return add(raw);
        },
        getData: function () {
          return buffer;
        },
      };
    })()
  );
  async function startRecording() {
    console.log("start recording");
    audioBuffer.reset();

    window.navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const startMic = new mic();

        startMic.setStream(stream);
        startMic.on("data", (chunk) => {
          var raw = mic.toRaw(chunk);
          if (raw == null) {
            return;
          }
          audioBuffer.addData(raw);
        });

        setRecording(true);
        setMicStream(startMic);
      });
  }
  async function stopRecording() {
    console.log("stop recording");

    micStream.stop();
    setMicStream(null);
    setRecording(false);

    const resultBuffer = audioBuffer.getData();
    const bytes = resultBuffer;
    console.log(["resultBuffer", resultBuffer]);
    console.log("Converting text...");

    Predictions.convert({
      transcription: {
        source: {
          bytes,
          // resultBuffer,
        },
        // language: "en-US", // other options are "en-GB", "fr-FR", "fr-CA", "es-US"
      },
    })
      .then(({ transcription: { fullText } }) => {
        fullText = fullText.toLowerCase().replace(".", "");
        setResponse(fullText);
        if (
          fullText != "" &&
          (fullText.includes(wordInData) || wordInData.includes(fullText))
        ) {
          const audio = new Audio("/sounds/correctAnswer.mp3");
          audio.play();
        } else {
          const audio = new Audio("/sounds/incorrectAnswer.mp3");
          audio.play();
        }
        console.log(fullText);
        // console.log(["fullText", fullText]);
      })
      .catch((err) => {
        console.error(["err", err]);
        setResponse(JSON.stringify(err, null, 2));
      });
  }
  console.log(cardSetId);
  return (
    <Authenticator>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
      >
        <View>
          <CardViewCollection
            items={
              useDataStoreBinding({
                type: "collection",
                model: Card,
                criteria: createDataStorePredicate({
                  field: "cardsetID",
                  operand: "b3cba41e-43c0-4b33-b6b0-68bc8b211bda",
                  // operand: cardSetId,
                  operator: "eq",
                }),
                pagination: { sort: (s) => s.id(SortDirection.ASCENDING) },
              }).items
            }
            overrides={{ "Text Group": { fontWeight: "bold" } }}
            overrideItems={({ item, index }) => ({
              backgroundColor: index % 2 === 0 ? "white" : "lightgray",
              overrides: {
                Play: {
                  onClick: () => {
                    // var synthes = new SpeechSynthesisUtterance(item.word);
                    // synthes.lang = "en-US";
                    // speechSynthesis.speak(synthes);
                    Predictions.convert({
                      textToSpeech: {
                        source: {
                          text: item.word,
                        },
                        voiceId: "Amy", // default configured on aws-exports.js
                        // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
                      },
                    })
                      .then((result) => {
                        let AudioContext =
                          window.AudioContext || window.webkitAudioContext;
                        console.log({ AudioContext });
                        const audioCtx = new AudioContext();
                        const source = audioCtx.createBufferSource();
                        audioCtx.decodeAudioData(
                          result.audioStream,
                          (buffer) => {
                            source.buffer = buffer;
                            source.connect(audioCtx.destination);
                            source.start(0);
                          },
                          (err) => console.log({ err })
                        );

                        setResponse(`Generation completed, press play`);
                      })
                      .catch((err) => setResponse(err));
                  },
                },
                SpokenText: { children: response },
                Microphone: {
                  onClick: (e) => {
                    // alert("clicked");
                    if (!isRecording) {
                      setWordInData(item.word.toLowerCase().replace(".", ""));
                      startRecording();
                    } else {
                      stopRecording();
                    }
                    setIsRecording(!isRecording);
                  },
                  style: { stroke: isRecording ? "red" : "black" },
                },
              },
            })}
          />
        </View>
      </Flex>
    </Authenticator>
  );
};

export default Home;
