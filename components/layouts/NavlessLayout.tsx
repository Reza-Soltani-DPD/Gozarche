import Head from 'next/head'
import React from 'react'

type NavlessLayoutProps={
	title?:string,
	children?:React.ReactNode
}

export default function NavlessLayout(props:NavlessLayoutProps) {
	const {title,children}=props
  return (
	<>
	<Head>
	<title>{title ? title + " - Gozarche" : "فروشگاه گذرچه"}</title>
	</Head>
	<div className=''>
		{children}
	</div>
	</>
  )
}
