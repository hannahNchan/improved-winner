
import { Col, Container, Row } from 'react-bootstrap'

import appPlaceholderImg from '@/assets/images/mockup/app-placeholder.jpg'
import element2 from '@/assets/images/elements/02.svg'
import element3 from '@/assets/images/elements/03.svg'
import element4 from '@/assets/images/elements/04.svg'
import element5 from '@/assets/images/elements/05.svg'
import element6 from '@/assets/images/elements/06.svg'
import element7 from '@/assets/images/elements/07.svg'
import element8 from '@/assets/images/elements/08.svg'
import appStore from '@/assets/images/app-store.svg'
import qrCode from '@/assets/images/qr-code.png'
import googlePlay from '@/assets/images/google-play.svg'
import PageMetaData from '@/components/PageMetaData'

const Download = () => {
  return (
    <>
    <PageMetaData title='Download'/>
    <main className="vh-100 py-5">
      <div className="position-absolute top-0 start-0 p-5">
        <img className="h-100px blur-4" height={100} width={100} src={element8} alt="element" />
      </div>
      <div className="position-absolute bottom-0 start-0 m-5 p-5">
        <img className="h-100px blur-7 m-5" width={100} height={100} src={element6} alt="image" />
      </div>
      <Container className="h-100 p-xl-0">
        <Row className="align-items-center h-100 g-4 g-xl-0 position-relative z-index-1 text-center text-lg-start">
          <Col lg={5}>
            <h1 className="display-3">Download The Best Social App</h1>
            <p className="lead">See resolved goodness felicity shy civility domestic had but perceive laughing six did far. </p>
            <div className="d-flex justify-content-center justify-content-lg-start mt-4">
              <div className="me-4">
                <h2 className="mb-0">4.6</h2>
                <span>Rating on app store</span>
              </div>
              <div>
                <h2 className="mb-0">10M+</h2>
                <span>Active tend users</span>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start mt-4">
              <span role="button">
                <img className="h-50px" width={160} height={50} src={appStore} alt="app-store" />
              </span>
              <span role="button">
                <img className="h-50px ms-1 ms-sm-2" width={160} height={50} src={googlePlay} alt="google-play" />
              </span>
            </div>
          </Col>
          <div className="col-lg-7 position-relative">
            <div className="position-absolute top-0 start-0 mt-5 z-index-1 d-none d-lg-block">
              <img alt="element" className="h-100px" width={105} height={100} src={element2} />
            </div>
            <div className="position-absolute top-0 end-0 d-none d-lg-block">
              <img alt="element" className="h-100px" height={100} width={100} src={element3} />
            </div>
            <div className="position-absolute bottom-0 end-0 z-index-1 me-5 d-none d-lg-block">
              <img alt="element" className="h-150px" src={element4} />
            </div>
            <div className="position-absolute top-50 start-0 translate-middle-y z-index-1 ms-5 ps-5 mt-5 d-none d-lg-block">
              <img alt="element" className="h-100px w-auto" src={element7} />
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y z-index-1 d-none d-lg-block">
              <img alt="element" className="h-50px blur-1" width={50} height={50} src={element6} />
            </div>
            <div className="position-absolute bottom-0 start-0 ms-5 ps-5 d-none d-lg-block">
              <img alt="element" className="h-100px blur-2" width={100} height={100} src={element6} />
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y z-index-1 me-4 mt-n5 d-none d-lg-block">
              <img alt="element" className="h-150px mt-n5 me-5 w-auto" src={element5} />
            </div>
            <div className="iphone-x" style={{ background: `url(${appPlaceholderImg})`, backgroundSize: 'cover' }}>
              <i />
              <b />
            </div>
          </div>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 end-0 m-5 text-center d-none d-xl-block">
        <h6 className="mt-3">
          Scan here <br /> to download
        </h6>
        <svg className="h-80px" width={59} height={126} viewBox="0 0 59 126" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M38.2 56.6C38.5 56.2 38.8 56 38.9 55.7C45.1 45.5 50.4 34.9 53.5 23.2C54.9 17.9 55.5 12.5 55.8 7.09999C55.9 5.69999 56.1 4.19999 56.3 2.79999C56.4 2.29999 56.6 1.69999 56.9 1.29999C57.1 1.09999 57.6 0.899987 57.9 0.999987C58.2 1.09999 58.4 1.59999 58.4 1.89999C58 15.2 55.8 28.2 50 40.3C47 46.5 43.9 52.6 40.2 58.4C39.8 59 39.3 59.9 39.4 60.5C40.7 68.3 39.4 75.9 37.1 83.2C33.6 94.5 29.6 105.6 25.8 116.8C25.6 117.5 25.3 118.3 25.4 119.3C31.6 114.5 37.7 109.6 44 104.7C44.8 105.8 44.6 106.6 44.1 107.4C43.5 108.3 42.9 109.3 42.1 110.1C37.6 114.4 33.1 118.7 28.5 122.9C27.5 123.8 26.3 124.5 25.1 125.1C22.7 126.2 20.8 125.1 20.4 122.5C19.7 117.4 19.1 112.4 18.6 107.3C18.4 105.8 19 104.9 20.1 104.7C21.1 104.6 22 105.3 22.3 106.8C22.8 109.4 23.1 112 23.6 114.9C23.9 114.4 24.1 114.2 24.2 113.9C27.6 102.6 31.1 91.3 34.3 79.9C35.3 76.5 35.6 72.8 36.1 69.3C36.3 67.9 36.1 66.4 36.1 64.6C35.4 65.2 34.9 65.7 34.5 66.1C31.5 69.5 28.1 72.6 24.2 75C20.7 77.1 17 78.4 12.8 78.3C11.4 78.2 9.89998 78.1 8.49998 77.7C2.29998 76 -1.00002 70.4 0.399976 63.9C1.99998 55.8 10.1 45.9 21.8 46C28.4 46 33.4 49.1 37 54.6C37.4 55.2 37.8 55.9 38.2 56.6ZM12.7 75.5C16.5 75.4 19.7 74.4 22.6 72.6C27.3 69.9 31.1 66.1 34.5 62C35.3 61.1 35.3 60.2 35 59.1C33.2 53.4 27.2 49.2 21.3 49.4C13.3 49.7 5.09998 56.5 3.39998 64.4C2.19998 69.7 4.79998 73.8 9.99998 75.1C11 75.3 12.1 75.4 12.7 75.5Z"
            fill="black"
          />
        </svg>
        <div className="mt-3">
          <img className="w-100px" src={qrCode} alt="image" />
        </div>
      </div>
    </main>
    </>
  )
}
export default Download
