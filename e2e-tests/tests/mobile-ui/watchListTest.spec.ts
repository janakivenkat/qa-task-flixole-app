/*TEST: Validate login and add movie to watchlist on Android mobile app

SETUP:
  - Launch Appium server
  - Start Android emulator
  - Load FlixOlé app APK

PRECONDITIONS:
  - Test user credentials from .env (e.g., EMAIL, PASSWORD)
  - App is installed and launches to login screen

STEPS:

1. Launch the FlixOlé App
2. Wait for login screen to load
3. Enter email: ENV.validemail and click submit
4. Enter password: ENV.validpassword\
5. Tap on "Login" button
6. WAIT until landing/home screen is loaded
7. ASSERT: "My Account" text or profile icon is visible
8. Navigate to a movie listing or search for a specific movie
9. Tap on the movie to go to its details screen
10. Tap on the "Add to Watchlist" i.e My List + icon
11. ASSERT: Watchlist icon changes state
12. Click back button
12. Click "Your Flixole" to see your list
13. ASSERT: Verify the movie listed under My Lista section

TEARDOWN:
  - Logout user (if needed)
  - Close the app */



/*import { expect } from 'chai';
import watchlistPage from '../pages/watchListPage';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/LoginPage';
import { ENV } from '../../utils/env';

describe('FlixOlé Mobile App – Login and Watchlist Flow', () => {
   it('should login', async () => {
    await HomePage.fnNavigateToHomePage();
    await LoginPage.fnGotoLogin();
    await LoginPage.fnLogin(ENV.validemail, ENV.validpassword);
  });

   it('should add an item to watchlist', async () => {
    await watchlistPage.addToWatchlist();
    await watchlistPage.verifyToastMessage();

    await watchlistPage.openWatchlistTab();
    await watchlistPage.verifyItemInWatchlist();
  });
});
*/
