import Router from './router/index.js';
import ProfilePage from './pages/profile.js';
import ConfirmPage from './pages/confirm.js';
import WaitingForHelpPage from "./pages/waiting-for-help.js";

import RateModal from "./components/modals/rateModal.js";
import CommentModal from "./components/modals/commentModal.js";
import DeleteHelperModal from "./components/modals/deleteHelperModal.js";
import LoginPage from "./pages/login.js";

import "./css/style.scss"
import "./css/bootstrap-entry.scss"

import { firebase } from './firebase.js';

console.error('firebase', firebase);

const router = new Router({
  '/': new LoginPage(),
  '/profile': new ProfilePage(),
  '/confirm': new ConfirmPage(),
  '/waiting': new WaitingForHelpPage()
});

// const root = document.getElementById('root');
// const modal = document.getElementById('modal');


// starting page
// const profile = new ProfilePage();

// root.append(profile.element);

// modals
const rateModal = new RateModal();
const commentModal = new CommentModal();
const deleteHelperModal = new DeleteHelperModal();

////////////////// TESTING MODALS //////////////////
// modal.append(rateModal.element);
// modal.append(deleteHelperModal.element);
// modal.append(commentModal.element);
