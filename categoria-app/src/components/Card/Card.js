import React from 'react'
import classNames from 'classnames';
import {Container, Image, Button, Form} from './styles/Card'

export function Card({classes, children, ...restProps}){
    return (
        <Container className={classNames('card', classes)} {...restProps}>
            {children}
        </Container>
    )
}

Card.Form= function CardForm({classes, children, ...restProps}){
    return (
        <Form className={classNames('card__form', classes)} {...restProps}>
            {children}
        </Form>
    )
}

Card.Image = function CardImage({src, classes,  ...restProps}){
    return(
        <Image src={src} className={classNames('card__image', classes)} {...restProps}/>
    )
}

Card.Button = function CardButton({classes,  ...restProps}){
    return(
        <Button className={classNames('card__button', classes)} {...restProps}/>
    )
}
