// utils/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
// Add icons to the library
library.add(faFacebook, faTwitter, faInstagram, faEnvelope, faMapMarkerAlt);
