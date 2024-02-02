import React from "react";
import "./ShareChalisaModal.css";
import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const ShareChalisaModal = ({ showShareModal, setShowShareModal }) => {
  const sharedUrl = "https://RJKsBhakthiHanumanChalisa.netlify.app/";

  const handleCloseModal = () => {
    setShowShareModal(false);
  };
  const handleCopyToClipboard = () => {
    toast.success("link copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: true,
      hideProgressBar: true,
    });
  };
  return (
    <div>
      <Modal show={showShareModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="share-modal-title">
            Share Hanuman Chalisa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="share-icons-btn-div">
            <FacebookShareButton
              url={sharedUrl}
              quote={"The divine Hanuman Chalisa ! Hare Ram ! Hare Krishn!!"}
              hashtag="#hanumanchalisa"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={sharedUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
              url={sharedUrl}
              quote={"The divine Hanuman Chalisa ! Hare Ram ! Hare Krishn!!"}
              hashtag="#hanumanchalisa"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={sharedUrl}
              title={"Hanuman Chalisa"}
              summary={"The divine Hanuman Chalisa! Hare Ram! Hare Krishn!!"}
              source={sharedUrl}
              >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
              url={sharedUrl}
              subject={"Check out this Hanuman Chalisa"}
              body={
                "I wanted to share the divine Hanuman Chalisa with you! Hare Ram! Hare Krishn!!"
              }
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <CopyToClipboard text={sharedUrl}>
              <HiOutlineClipboardDocumentCheck
                onClick={handleCopyToClipboard}
                size={32}
                className="copy-to-clipb-icon"
              />
            </CopyToClipboard>
          </div>{" "}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShareChalisaModal;
