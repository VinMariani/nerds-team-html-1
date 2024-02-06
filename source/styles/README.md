Тут пишутся стили, можно писать без фишек препроцессора SASS, можно писать как на CSS.
Блоки можно вкладывать друг в друга.

Подробнее по ссылке можно узнать Методология БЭМ
<a href="https://ru.bem.info/methodology/css/">https://ru.bem.info/methodology/css/</a>

Наименование классов должно быть в таком виде

.block
.block__element block__element--active

.block .block--opened
.block__element block__element--active
.block2
.block__element2

ОШИБКА ДЕЛАТЬ ТАК:

1) Тут блок указан после блока и элемента
.block__element
.block

2) Здесь нет самого блока, только блок с элементом

.block__element

3) Здесь идет элемент за элементов, такого быть не должно

.block__element__element

4) Здесь модификатор используется без блока и его элемента.
.block
.block__element
.block__element--active
