import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    faYoutube,
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
   <div class="social-container" position="center-align">
      <h3><b>Social Follow</b></h3>
      <a href="https://www.youtube.com/channel/UCyhXaSOeDnCYGneFscMvh3Q"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" color="#eb3223" />
      </a>
      <a href="https://www.linkedin.com/in/brumeikogho/"
        className="youtube social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color= "#4968ad" />
      </a>
      <a href="https://www.facebook.com/brumefizzi/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" color= "#4968ad" />
      </a>
      <a href="https://www.twitter.com/brumefizzi" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color= "#49a1eb" />
      </a>
      <a href="https://www.instagram.com/brumeikogho"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" color= "pink" />
      </a>
</div>
 );
}