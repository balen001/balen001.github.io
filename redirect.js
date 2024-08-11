function redirectToOSSpecificPage() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return window.location.href = 'https://play.google.com/store/apps/details?id=com.nasswallet.customer&hl=en';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return window.location.href = 'https://apps.apple.com/iq/app/nasswallet/id1511124150';
    } else if (/Windows NT/.test(userAgent)) {
        return window.location.href = 'https://nass.iq/';
    } else if (/Macintosh/.test(userAgent)) {
        return window.location.href = 'https://nass.iq/';
    } else if (/Linux/.test(userAgent)) {
        return window.location.href = 'https://nass.iq/';
    } else {
        return window.location.href = 'https://nass.iq/';
    }
}


redirectToOSSpecificPage();
