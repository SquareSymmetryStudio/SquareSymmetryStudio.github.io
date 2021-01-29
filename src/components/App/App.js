import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { 
  SquareSymmetryHeader,
  Home,
  AboutUs,
  Services,
  Contact
} from '../SquareSymmetry';

const { Header, Content } = Layout;

const contentStyle = {
  backgroundColor: '#000000',
  height: '92%',
  position: 'relative',
  color: 'white'
};

const headerStyle = {
  backgroundColor: '#373737',
  height: '8%',
}

const layoutStyle = {
  height: '100vh',
  width: '100vw',
}

function App() {
  return (
    <Layout style={ layoutStyle } >
      <Router>
        <Header style={ headerStyle }>
          <SquareSymmetryHeader />
        </Header>
        <Content style={ contentStyle }>
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
