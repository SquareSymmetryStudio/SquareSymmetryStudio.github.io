import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import { 
  Layout,
  Row,
} from 'antd';

import SquareSymmetryHeader from './header';
import { 
  AboutUs,
  Services,
  Home, 
  Contact
} from './sections';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header className='app-header'>
          <Row className='app-header__row' align='middle'>
            <SquareSymmetryHeader />
          </Row>
        </Header>
        <Content className='app-content'>
          <Row className='app-content__row'>
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
          </Row>
        </Content>
      </Router> 
    </Layout>
  );
}

export default App;
