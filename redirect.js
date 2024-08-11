function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    } else if (/Windows NT/.test(userAgent)) {
        return 'Windows';
    } else if (/Macintosh/.test(userAgent)) {
        return 'Mac';
    } else if (/Linux/.test(userAgent)) {
        return 'Linux';
    } else {
        return 'Other';
    }
}


function redirectToOSSpecificPage() {
    const os = detectOS();

    switch (os) {
        case 'Android':
            window.location.href = 'https://play.google.com/store/apps/details?id=com.nasswallet.customer&hl=en';
            break;
        case 'iOS':
            window.location.href = 'https://apps.apple.com/iq/app/nasswallet/id1511124150';
            break;
        case 'Windows':
            window.location.href = 'https://nass.iq/';
            break;
        case 'Mac':
            window.location.href = 'https://nass.iq/';
            break;
        case 'Linux':
            window.location.href = 'https://nass.iq/';
            break;
        default:
            window.location.href = 'https://nass.iq/';
            break;
    }
}


redirectToOSSpecificPage();