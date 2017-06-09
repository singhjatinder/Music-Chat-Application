import { MusicChatAppPage } from './app.po';

describe('music-chat-app App', () => {
  let page: MusicChatAppPage;

  beforeEach(() => {
    page = new MusicChatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
