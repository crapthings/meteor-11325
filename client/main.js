Meteor.startup(async function () {
  const { default: renderButton } = await import('/imports/button')
  renderButton()


  const { default: test } = await import('/imports/test')

  console.log(test)
})

if (false) {
  import '/imports/test'
}

// import '/imports/test'
