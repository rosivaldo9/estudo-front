import './index.css'

const viw = () =>{
    return (
        <div>
 <h1>diplay: blok</h1>
    <section class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </section>

    <h1>diplay: flex</h1>
    <section class="container flex">
        <div class="item flex-item-1">1</div>
        <div class="item flex-item-1">2</div>
        <div class="item flex-item-1">3</div>
        <div class="item flex-item-1">4</div>
    </section>


    <h1>flex-direction: row</h1>
    <section class="container flex row">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>

    <h1>flex-direction: row-reverse</h1>
    <section class="container flex  row-revese">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>

    <h1>flex-direction: colunm</h1>
    <section class="container   colum">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>


    <h1>flex-direction:colunm-reverse</h1>
    <section class="container   colum-revese">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>

    <h1>flex-wrap</h1>
    <section class="container wrap">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>


    <h1>flex-wrap: nowrap</h1>
    <section class="container nowrap">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>

    <h1>flex-wrap: wrap-reverse</h1>
    <section class="container wrap-reverse">
        <div class="item ">1</div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </section>
        </div>
    )
}