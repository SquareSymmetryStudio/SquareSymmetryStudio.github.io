import logo from './sslogo.svg';
import './App.css';

import { Layout, Button, Carousel } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Button>ABOUT US</Button>
        <Button>SERVICES</Button>
        <Button>CONTACT</Button>
      </Header>
      <Content>
        <Carousel style={{ height: '90vh'}}dotPosition="right">
          <div className='App-content'>
              <img src={logo} className="App-logo" alt="logo" />
              <p className="wipText">
                Since late 2020 a square symmetry is being developed in the wild...
              </p>
          </div>
          <div>Test 2</div>
        </Carousel>
      </Content>
    </Layout>
  );
}

export default App;
