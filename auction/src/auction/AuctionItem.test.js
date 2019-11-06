import React from 'react'
import AuctionItem from './AuctionItem'
import { render, fireEvent } from '@testing-library/react'


describe('AuctionItem', () => {


    it('should return proper auction from addToCart',()=>{
        //arrange
        const auction = {id:1, title: 'test', imgURL: 'http://google.pl', description:'test', price:111 };
        const spyAddToCart = jest.fn();
        const { container } = render(<AuctionItem {...auction} addToCart={spyAddToCart}/>)
        const button = container.querySelector('.btn.btn-primary')
        //act
        //fireEvent()
        fireEvent.click(button)
        
        //assert
        expect(spyAddToCart).toHaveBeenCalled()
        expect(spyAddToCart).toHaveBeenCalledWith(auction)

    });


})