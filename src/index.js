import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', 'yellow')
})

class Person {
    static info = 'aaa'
}
console.log(Person.info);