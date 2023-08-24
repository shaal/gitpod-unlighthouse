export default {
  site: 'https://www.example.com/',
  scanner: {
    maxRoutes: false,
		// when dynamicSampling set to true - not all pages will be scanned
    dynamicSampling: false,
    // exclude specific routes
    exclude: [
      // '/.*?pdf',
      // '.*/amp',
      // 'en-*',
    ],
    // run lighthouse for each URL 3 times
    samples: 1,
    // use desktop to scan
    device: 'desktop',
    // // enable the throttling mode
    // throttle: true,
  },
  // debug: true,
}
