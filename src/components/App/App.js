import { 
  Layout,
  Row,
} from 'antd';

import { 
  SquareSymmetryHeader,
  Home,
  AboutUs,
  Services,
  Contact
} from '../SquareSymmetry';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className='app-layout'>
        <Header className='app-header'>
          <SquareSymmetryHeader />
        </Header>
        <Content className='app-content'>
          <Row 
            className='app-row' 
            id='home'
          >
            <Home />
          </Row>
          <Row 
            className='app-row'
            id='about-us'
          >
            <AboutUs />
          </Row>
          <Row 
            className='app-row'
            id='services'>
            <Services />
          </Row>          
          <Row
            className='app-row' 
            id='contact'
          >
            <Contact/>
          </Row>          
        </Content>
    </Layout>
  );
}

export default App;
