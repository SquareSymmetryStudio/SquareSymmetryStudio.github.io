import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import { 
  Layout 
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
      <Router>
        <Header className='app-header'>
          <SquareSymmetryHeader />
        </Header>
        <Content className='app-content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about-us'>
              <AboutUs />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Content>
      </Router> 
    </Layout>
  );
}

export default App;
