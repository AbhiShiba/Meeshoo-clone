import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export function Cart() {
    const storageDetils = JSON.parse(sessionStorage.getItem('sample'));
    const [showCart,setShowCart] = useState(null);
    const showCartData = (arr) => {
        return arr.map((item,index) => {
            return <div key={`div${index}`} >
                <p key={`item${index}`}>{item.item}</p>
                <button key={`pos${index}`} onClick={(e) => {increment(item)}}>+</button>
                {item.count}
                <button key={`neg${index}`} onClick={() => {decrement(item)}} >-</button>
            </div>
        })
    }
    useEffect(() => {
        setShowCart(storageDetils);
    },[])

    const increment = (arg) => {
        let tempCount;
        let tempIndex;
        if(storageDetils.some((item,index) => {
            if(item.item === arg.item){
                tempCount = item.count;
                tempIndex = index;
                return true
            } else {
                return false
            }
        })) {
            storageDetils[tempIndex].count = tempCount + 1;
            sessionStorage.setItem('sample',JSON.stringify(storageDetils));
            setShowCart(storageDetils);
        } else {
            console.log('no data')
        }
        console.log(arg)
    }

    const decrement = (arg) => {
        let tempCount;
        let tempIndex;
        if(storageDetils.some((item,index) => {
            if(item.item === arg.item){
                tempCount = item.count;
                tempIndex = index;
                return true
            } else {
                return false
            }
        })) {
            storageDetils[tempIndex].count = tempCount - 1;
            if(tempCount === 1) {
                storageDetils.splice(tempIndex,1);
            }
            sessionStorage.setItem('sample',JSON.stringify(storageDetils));
            setShowCart(storageDetils);
        } else {
            console.log('no data')
        }
        console.log(arg)
    }
    
  return (
    <div>{showCart === null ? "" : showCartData(showCart)}</div>
  )
}
