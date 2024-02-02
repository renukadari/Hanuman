import React, { useState, useRef } from "react";
import "./ChalisaPlay.css";
import Typist from "react-typist";
import ReactPlayer from "react-player";
// import Typewriter from "typewriter-effect";
import HanumanChalisa from "../../content/chalisa";
import ChalisaAudio from "../../assets/audio/chalisa.mp3";
import ChalisaThumbnail from "../../assets/jpg/hanuma1.jpg";
// import { Typewriter } from "react-simple-typewriter";
import TypeWriterEffect from "react-typewriter-effect";

const ChalisaPlay = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const myRef = document.querySelector(".scrollable-div");

  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };
  const handleType = () => {
    console.log("hi");
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const songLyrics = [
    "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।",
    "बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥",
    "बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार ।",
    "बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥",
    "जय हनुमान ज्ञान गुन सागर ।",
    "जय कपीस तिहुँ लोक उजागर ॥१॥",
    "राम दूत अतुलित बल धामा ।",
    "अञ्जनि-पुत्र पवनसुत नामा ॥२॥",
    "महाबीर बिक्रम बजरङ्गी ।",
    "कुमति निवार सुमति के सङ्गी ॥३॥",
    "कञ्चन बरन बिराज सुबेसा ।",
    "कानन कुण्डल कुञ्चित केसा ॥४॥",
    "हाथ बज्र औ ध्वजा बिराजै ।",
    "काँधे मूँज जनेउ साजै ॥५॥",
    "सङ्कर सुवन केसरीनन्दन ।",
    "तेज प्रताप महा जग बन्दन ॥६॥",
    "बिद्यावान गुनी अति चातुर ।",
    "राम काज करिबे को आतुर ॥७॥",
    "प्रभु चरित्र सुनिबे को रसिया ।",
    "राम लखन सीता मन बसिया ॥८॥",
    "सूक्ष्म रूप धरि सियहिं दिखावा ।",
    "बिकट रूप धरि लङ्क जरावा ॥९॥",
    "भीम रूप धरि असुर सँहारे ।",
    "रामचन्द्र के काज सँवारे ॥१०॥",
    "लाय सञ्जीवन लखन जियाये ।",
    "श्रीरघुबीर हरषि उर लाये ॥११॥",
    "रघुपति कीह्नी बहुत बड़ाई ।",
    "तुम मम प्रिय भरतहि सम भाई ॥१२॥",
    "सहस बदन तुह्मारो जस गावैं ।",
    "अस कहि श्रीपति कण्ठ लगावैं ॥१३॥",
    "सनकादिक ब्रह्मादि मुनीसा ।",
    "नारद सारद सहित अहीसा ॥१४॥",
    "जम कुबेर दिगपाल जहाँ ते ।",
    "कबि कोबिद कहि सके कहाँ ते ॥१५॥",
    "तुम उपकार सुग्रीवहिं कीह्ना ।",
    "राम मिलाय राज पद दीह्ना ॥१६॥",
    "तुह्मरो मन्त्र बिभीषन माना ।",
    "लङ्केस्वर भए सब जग जाना ॥१७॥",
    "जुग सहस्र जोजन पर भानु ।",
    "लील्यो ताहि मधुर फल जानू ॥१८॥",
    "प्रभु मुद्रिका मेलि मुख माहीं ।",
    "जलधि लाँघि गये अचरज नाहीं ॥१९॥",
    "दुर्गम काज जगत के जेते ।",
    "सुगम अनुग्रह तुह्मरे तेते ॥२०॥",
    "राम दुआरे तुम रखवारे ।",
    "होत न आज्ञा बिनु पैसारे ॥२१॥",
    "सब सुख लहै तुह्मारी सरना ।",
    "तुम रच्छक काहू को डर ना ॥२२॥",
    "आपन तेज सह्मारो आपै ।",
    "तीनों लोक हाँक तें काँपै ॥२३॥",
    "भूत पिसाच निकट नहिं आवै ।",
    "महाबीर जब नाम सुनावै ॥२४॥",
    "नासै रोग हरै सब पीरा ।",
    "जपत निरन्तर हनुमत बीरा ॥२५॥",
    "सङ्कट तें हनुमान छुड़ावै ।",
    "मन क्रम बचन ध्यान जो लावै ॥२६॥",
    "सब पर राम तपस्वी राजा ।",
    "तिन के काज सकल तुम साजा ॥२७॥",
    "और मनोरथ जो कोई लावै ।",
    "सोई अमित जीवन फल पावै ॥२८॥",
    "चारों जुग परताप तुह्मारा ।",
    "है परसिद्ध जगत उजियारा ॥२९॥",
    "साधु सन्त के तुम रखवारे ।",
    "असुर निकन्दन राम दुलारे ॥३०॥",
    "अष्टसिद्धि नौ निधि के दाता ।",
    "अस बर दीन जानकी माता ॥३१॥",
    "राम रसायन तुह्मरे पासा ।",
    "सदा रहो रघुपति के दासा ॥३२॥",
    "तुह्मरे भजन राम को पावै ।",
    "जनम जनम के दुख बिसरावै ॥३३॥",
    "अन्त काल रघुबर पुर जाई ।",
    "जहाँ जन्म हरिभक्त कहाई ॥३४॥",
    "और देवता चित्त न धरई ।",
    "हनुमत सेइ सर्ब सुख करई ॥३५॥",
    "सङ्कट कटै मिटै सब पीरा ।",
    "जो सुमिरै हनुमत बलबीरा ॥३६॥",
    "जय जय जय हनुमान गोसाईं ।",
    "कृपा करहु गुरुदेव की नाईं ॥३७॥",
    "जो सत बार पाठ कर कोई ।",
    "छूटहि बन्दि महा सुख होई ॥३८॥",
    "जो यह पढ़ै हनुमान चालीसा ।",
    "होय सिद्धि साखी गौरीसा ॥३९॥",
    "तुलसीदास सदा हरि चेरा ।",
    "कीजै नाथ हृदय महँ डेरा ॥४०॥",
    "पवनतनय सङ्कट हरन मङ्गल मूरति रूप ।",
    "राम लखन सीता सहित हृदय बसहु सुर भूप ॥",
  ];

  return (
    <div>
      <div className="my-5 chalisa-player-div">
        <ReactPlayer
          url={ChalisaAudio}
          playing={isAudioPlaying}
          controls={true}
          loop={true}
          width="800px"
          height="20px"
          onPlay={handleAudioPlay}
          onPause={handleAudioPause}
          className="react-player-class"
        />
      </div>
      <div className="my-5 text-typing-div">
        {isAudioPlaying && (
          <div>
            {/* <Typewriter
              text= {songLyrics}            /> */}
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#ff8500",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={13000}
              cursorColor="#ff8500"
              multiText={songLyrics}
              loop={true}
              nextTextDelay={11000}
              typeSpeed={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChalisaPlay;
