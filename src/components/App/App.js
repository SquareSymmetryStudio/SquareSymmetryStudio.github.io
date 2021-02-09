import { 
  Layout,
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
          <Home />
          <AboutUs />
          <Services />
          <Contact />
        </Content>
    </Layout>
  );
}

export default App;
