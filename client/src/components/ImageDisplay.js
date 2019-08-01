//Helper function to convert a url to 400x400.  DO not modify
const convertImageSize = (imageUrl) => {
  let urlArr = imageUrl.split('');
  for (let i = 0; i < urlArr.length; i++) {
    let prev = urlArr[i - 1];
    let curr = urlArr[i];

    if ((prev === 'h' || prev === 'w') && curr === '=') {
      urlArr[i + 1] = '4';
    }
  }
  return urlArr.join('');
}

/*
  <div id="imageDisplay" className="container">
    <img src='https://images.unsplash.com/photo-1506780685701-ba404b9e640d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=100' alt=""/>
  </div>
*/