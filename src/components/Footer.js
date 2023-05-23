import React from 'react';
// import '../CSS/index.css'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center bottom' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section> */}

        <section className=''>
          <MDBRow>
            
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Category</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/movies/action' className='text-white'>
                    Action
                  </a>
                </li>
                <li>
                  <a href='/movies/drama' className='text-white'>
                    Drama
                  </a>
                </li>
                <li>
                  <a href='/movies/comedy' className='text-white'>
                    Comedy
                  </a>
                </li>
                <li>
                  <a href='/movies/crime' className='text-white'>
                    Crime
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Other Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.netflix.com/pk/' className='text-white'>
                    Netflix
                  </a>
                </li>
                <li>
                  <a href='https://tubitv.com/home' className='text-white'>
                    Tubitv
                  </a>
                </li>
                <li>
                  <a href='https://www.justwatch.com/' className='text-white'>
                    Justwatch
                  </a>
                </li>
                <li>
                  <a href='https://erosnow.com/' className='text-white'>
                    erosnow
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/about' className='text-white'>
                    About
                  </a>
                </li>
                <li>
                  <a href='/contact' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/investors' className='text-white'>
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href='help' className='text-white'>
                    Help Centre
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright Shahzad & Saad
      </div>
    </MDBFooter>
  );
}