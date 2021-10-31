var _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    const unreadMessageCountElement = document.querySelector('#notifications-anchor .badge');
    const unreadMessagesCount = unreadMessageCountElement ? Number(unreadMessageCountElement.textContent) : 0;
    Ferdi.setBadge(unreadMessagesCount, 0);
  };
  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
