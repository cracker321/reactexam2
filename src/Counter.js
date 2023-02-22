
//[ 상태 state ]
//리액트의 '상태 state'를 사용하기 위해서는, react를 임포트해줘야 하고,
//'메소드 {useState}': 상태를 사용하기 위해서는, 이 '메소드 useState'를 사용해야 함.
import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";


//< 컴퍼넌트 Counter >
//컴퍼넌트는 '함수 자신이 가진 상태 state가 변화'하면, 화면을 다시 그려 rerender를 한다.
//즉, '함수 Counter가 다시 호출된다'!!
const Counter = () =>{


console.log("counter 호출!!") //'함수 자신이 가진 상태 state가 변화'
                             //즉, 화면에서 개발자도구의 아래 'Console'부분을 확인하면 된다.
                             //증감버튼 누를 때마다 '함수 Counter'가 반복해서 호출(화면에 보여짐)되어서,
                             //그에 따라, 'counter 호출!!'이라는 글자가 계속해서 호출됨.


    //===========================================================================================

    //0에서 출발
    //1씩 증가하고
    //1씩 감소하는
    //count 상태

    //< 상태 1 >
    //- '리액트의 메소드인 useState'는 '배열을 반환'하고, 배열의 비구조화 할당을 통해서,
    // '인덱스 [0]을 count', '인덱스 [1]을 setCount'라는 '상수'로 받아오는 메소드임.
    //  'count'와 'setCount'는 '상수(1, 2, 3 등..)'라는 것 명심!
    //- '메소드 setCount': '상태변화 함수'로 기능함.
    //- '0': 초기값('0'에서 출발하는 것)
    //- 아래 'const [count, setCount] = useState(매개변수)'는 이 자체로 변하지 않는 형식임
    //  대괄호 [] 내부에는 오직 'count와 setCount'만 들어갈 수 있음. 물론 그 이름은 임의로 변경할 수 있지만,
    //  관습적으로 'count'와 'setCount'를 사용함.
    const [count, setCount] = useState(0);


    //===========================================================================================


    //< 상태 2 >
    const [count2, setCount2] = useState(0);



    //===========================================================================================
    //< '상태 1'의 1씩 증가시키는 함수 >

    const onIncrease =()=>{

        setCount(count + 1); //- 'setCount의 인자값': 위 변수 'const [count, setCount] =...'의 'count'를 인자값으로 바꿔줌.
                                   //만약, 'setCount(100)'으로 설정했으면, 저 위에서의 count는 100이 됨.
    };


    //===========================================================================================
    //< '상태 1'의 1씩 감소시키는 함수 >

    const onDecrease =()=>{
        setCount(count -1);
    }


    //===========================================================================================
    //< '상태 2'의 1씩 증가하는 함수 >
    const onIncrease2 =()=>{

        setCount2(count2 +1);
    }


    //===========================================================================================
    //< '상태 2'의 1씩 감소하는 함수 >
    const onDecrease2 =()=>{

       setCount2(count2 -1);
    }



//======================================= return문 ===============================================
//리턴문에 아무것도 작성하지 않으면 에러난다!


    return (

        <div>
            {/*첫 번째 증감버튼*/}
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>



            {/*자식컴퍼 OddEvenResult를 생성*/}
            {/*부모컴퍼(현재컴퍼) Counter가 전달할 props를 설정해주는 것임.
               여기서는 '부모컴퍼 Counter의 속성 중 하나인 count'를 '자식컴퍼 OddEvenResult'에 전달해줌*/}
            <OddEvenResult count = {count}/>


            {/*======================================================================================================*/}


            {/*두 번째 증감버튼*/}
            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
        </div>
    );
};

export default Counter;