const webcam = document.getElementById('webcam')

// const featureExtractor = ml5.featureExtractor('MobileNet', () => {
//   const classifier = featureExtractor.classification()
//   classifier.load('model/model.json', () => {
//     console.log('model loaded')
//     classifier.classify(sampleImage, (err, result) => {
//       if (err) return console.error(err)
//       console.log(result)
//     })
//   })
// })

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
  webcam.srcObject = stream
})
