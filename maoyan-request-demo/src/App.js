import logo from './logo.svg';
import './App.css';
import { cinemaApi } from 'maoyan-request'
import { useEffect } from 'react'


function App () {
  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    try {
      // let response = await fetch("/mmdb/movie/v4/list/hot.json?uuid=cf7c000b88d3a43ef1cc0b6f2a4f8dcc&channelId=70001&ci=30")
      // let res = await response.json()
      const res = await cinemaApi.detail({
        cinemaId: 37406
        // offset: 0,
        // commentId: 1186047171,
        // userId: 711628071
        // feedChannelId: 101,
        // limit: 20,
        // timeStamp: 1701239268829
        // lng: 114.1693611,
        // lat: 22.3193039
        // positionIds: 1382,
        // clientType: 'wechat_small_program'
      })
      console.log({ res })
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
