import React from 'react'
import { Button, Image } from '..'
import { FooterContainer, FooterCredits } from './style'

export function Footer() {
  return (
    <>
    <FooterContainer>
            <div className='footer-container__wrap'>
                    <div className='footer-content__logo'>
                          <Image src={'https://buildbox.com.br/site-build/wp-content/themes/buildbox/assets/img/buildbox-black.svg'} alt='logo' behavior="contain" />
                    </div>
                    <div className='footer-content__navigation'>
                        <ul className='footer-menu'>
                            <li>Início</li>
                            <li>Ideias</li>
                            <li>O que fazemos</li>
                            <li>Contato</li>
                            <li>Trabalhos</li>
                            <li>Carreiras</li>
                        </ul>
                        <ul className='footer-menu'>
                            <li>Facebook</li>
                            <li>O que fazemos</li>
                            <li>Ideias</li>
                            <li>Contato</li>
                            <li>Carreiras</li>
                            <li>Trabalhos</li>
                        </ul>
                        <ul className='footer-menu footer-menu-3'>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>Investidores</li>
                            <li>Ideias</li>
                            <li>Events</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div className='footer-content__newsletter'>
                      <div>
                        <h3 className='subscribe'>Receba nossa newsletter</h3>
                        <div className='input-text'>
                            <input type="text" placeholder='Seu email'/>
                        </div>
                        <div className='btn-subscribe'>
                          <Button >Subscribe</Button>
                        </div>
                      </div>
                    </div>
            </div>
        </FooterContainer>
        <FooterCredits>
            <div className='footer-credits__wrap'>
                <div className='footer-credits__wrap'>
                    <div className='footer-credits__info'>
                        <p>Developer Wesley Ferreira</p>
                        <p>Terms and Conditions | Privacy Policy</p>
                    </div>
                
                </div>
            </div>
        </FooterCredits>
    </>
    )
}
