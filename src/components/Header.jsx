import React from 'react'
import logoUrl from '../assets/logo.svg'
export default function Header(){return (<header className="header container"><a href="/" className="logo"><img src={logoUrl} alt="CineplayTv" /></a><div className="controls"><input className="search" placeholder="Buscar título..." /></div></header>)}
