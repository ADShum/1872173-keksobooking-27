import {buildOffer, buildLocation, buildBookingOffer} from './data.js';
import {createPopup} from './popup.js';
import {formDisabled, formAdle} from './form_validation.js';
const mapCanvas = document.querySelector('#map-canvas');
const offer = buildBookingOffer();

const popupNode = createPopup(offer);

mapCanvas.append(popupNode);
