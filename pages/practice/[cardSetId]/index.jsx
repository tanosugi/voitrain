import { Authenticator } from "@aws-amplify/ui-react";
import { Predictions } from "aws-amplify";
import mic from "microphone-stream";
import { useRouter } from "next/router";
import { useState } from "react";
import useQueryCardsFromCardSetId from "../../../src/hooks/useQueryCardsFromCardSetId";
import Center from "../../../src/layout/center";
import Layout from "../../../src/layout/layout";
import CardViewCollection from "../../../src/ui-components/CardViewCollection";

const Home = () => {
  const router = useRouter();
  const { cardSetId } = router.query;
  const { cards } = useQueryCardsFromCardSetId(cardSetId);
  const [wordInData, setWordInData] = useState("");
  const [response, setResponse] = useState(
    "<- Click microphone and record your voice!"
  );
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
        console.log("text:", fullText);
      })
      .catch((err) => {
        console.error(["err", err]);
        setResponse(JSON.stringify(err, null, 2));
      });
  }

  return (
    <Authenticator>
      <Layout>
        <Center>
          <CardViewCollection
            items={cards}
            overrides={{
              "Text Group": { fontWeight: "bold" },
            }}
            overrideItems={({ item, index }) => ({
              overrides: {
                TextRec: {
                  children: isRecording ? "stop recording" : "rec for check",
                },
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

                        setResponse(
                          "<- Click microphone and record your voice!"
                        );
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
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default Home;
