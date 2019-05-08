const sampleImage = document.getElementById('sample-image')
sampleImage.style.width = '300px'
sampleImage.style.height = '300px'

const featureExtractor = ml5.featureExtractor('MobileNet', () => {
  const classifier = featureExtractor.classification()
  classifier.load('model/model.json', () => {
    console.log('model loaded')
    classifier.classify(sampleImage, (err, result) => {
      if (err) return console.error(err)
      console.log(result)
    })
  })
})
