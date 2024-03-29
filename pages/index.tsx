import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/Home.module.scss'
import classNames from 'classnames/bind';
import Layout from '../components/Layout';

const cx = classNames.bind(styles)

export default function Home(props) {
  return (
    <Layout>
      <Container fluid="sm">
        <div className={cx("MainIntro", "d-flex", "align-items-center")}>
          <div>
            <h1 className={cx("no-drag", "text-white")} style={{
              fontSize: '27pt',
              wordBreak: 'keep-all'
            }}>
              미래를 바꿀 디스코드 관리봇, Aztra
              </h1>
            <h2 className={cx("no-drag", "text-white", "pt-2", "pb-5", "font-weight-lighter")} style={{
              fontSize: '15pt'
            }}>
              다채롭고 깔끔한 디스코드 서버를 만들 수 있도록 도와드리겠습니다.
              </h2>
            <Button variant="aztra" size="lg" className={cx("MainButton", "shadow-lg", "mr-3")} disabled={process.env.NODE_ENV === "production"}>
              {
                process.env.NODE_ENV === "production"
                  ? "곧 공개됩니다"
                  : "초대하기"
              }
            </Button>
            <Button className={cx("MainButton", "shadow-lg", "mx-2")} as={ScrollLink} to="main-features" spy={true} smooth={true} offset={50} duration={500} variant="dark" size="lg">
              자세히 알아보기
              </Button>
          </div>
        </div>
      </Container>


      <div id="main-features" className={cx("MainFeatures", "bg-dark", "text-white")} >
        <div className={cx("MainFeaturesItem")} style={{
          background: "linear-gradient(#8041D9, #6B66FF)"
        }}>
          <Container>
            <Row className={cx("align-items-center")}>
              <Col md={5}>
                <img src="/assets/images/Home/feat-warn.png" className={cx("shadow")} />
              </Col>
              <Col md={1} />
              <Col md={6} className={cx("text-lg-right")}>
                <h1>서버를 더욱 편리하게 관리하세요</h1>
                <p>기존의 헷갈리고 복잡한 관리봇이 아닌, 사용자 친화적으로 설계된 쉬운 사용법으로 여러분의 서버를 더 성장시킬 수 있습니다.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className={cx("align-items-center", "flex-row-reverse")}>
              <Col md={5}>
                <img alt="모바일 환경" src="/assets/images/Home/mobile.png" />
              </Col>
              <Col md={1} />
              <Col md={6}>
                <h1>모바일에서도 불편함 없이 사용하세요</h1>
                <p>Aztra 대시보드는 모바일에서도 언제 어디서나 사용하기 편하도록 모바일 환경에도 신경써서 개발하고 있습니다.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className={cx("align-items-center")}>
              <Col md={6}>
                <img alt="멤버 관리" src="/assets/images/Home/member-manage.png" className={cx("shadow")} />
              </Col>
              <Col md={1} className={cx("py-3")} />
              <Col md={5} className={cx("text-lg-right")}>
                <h1>다양한 기능을 제공합니다</h1>
                <p>봇 명령어만으로 봇을 세팅하고 관리하는 것은 한계가 있습니다. 대시보드를 통해 명령어만으로는 경험하지 못했던 매우 다양한 기능들을 제공합니다.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
