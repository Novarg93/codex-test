# Design System (GoStartup / design-ref)

## 1) Цветовая палитра
- `primary`: `#4A6CF7` (CTA, активные элементы, ссылки при hover, акценты).
- `dark`: `#111722` (основной тёмный фон, тёмные блоки).
- `dark-text`: `#79808A` (вторичный текст, мета-информация).
- `stroke`: `#E5E7EB` (границы, разделители).
- `white`: `#FFFFFF` (фон карточек, светлая тема).

Дополнительные рабочие цвета (из компонентов):
- Тёмные поверхности: `#1D232D`, `#2C3443`, `#222C40`.
- Тёмные границы: `#2E333D`, `#414652`, `#1F2633`.
- Фоны-оверлеи: `#EEF1FDEB`, `#1D232DD9`, `bg-black/30`.
- Успешные маркеры: `#00CB99`.

Тема:
- По умолчанию проект использует `dark` режим (`<html class="dark">`), но компоненты имеют и светлые, и тёмные состояния.

## 2) Типографика
- Заголовки: `Lexend`, `sans-serif` (`--font-heading`).
- Текст/интерфейс: `Inter`, `sans-serif` (`--font-body`).
- Основная толщина:
  - Заголовки секций: `font-semibold` / `font-medium`.
  - Основной текст: `text-base`, часто `font-medium`.
- Типовые размеры:
  - Hero H1: `text-2xl` -> `sm:text-4xl` -> `md:text-[50px]` (`md:leading-[60px]`).
  - Заголовки секций: `text-3xl` -> `sm:text-4xl` -> `md:text-[50px]`.
  - Карточки/подзаголовки: `text-xl` -> `sm:text-2xl`.
  - Мелкий UI-текст: `text-sm` / `text-xs`.

## 3) Отступы
- Базовый ритм: кратно `4px` (Tailwind scale), часто `px-4`, `px-6`, `px-8`, `py-3`, `py-[14px]`, `py-5`.
- Вертикальные секции: `pt-14 sm:pt-20 lg:pt-[130px]`.
- Hero: `pt-28 pb-24`, на больших экранах `lg:pt-[170px] lg:pb-[120px]`.
- Внутренние отступы крупных карточек/форм: `px-6 py-10` до `sm:p-[70px]`.
- Межэлементные интервалы: `space-x-3/4/5/10`, `space-y-4/5/7`.

## 4) Контейнеры
- Основной контейнер: `xl:container` + внешний `px-4`.
- Кастомный utility `container`: `margin-inline: auto; padding-inline: 1rem;`.
- Ширина контента строится через `max-w-*` (`max-w-[530px]`, `max-w-[920px]`, `max-w-[780px]` и т.д.).
- Сетка: `flex` + `-mx-4` / `px-4`, ширины колонок `w-full`, `sm:w-1/2`, `lg:w-1/3` и т.п.

## 5) Кнопки
- Primary:
  - Фон `bg-primary`, текст `text-white`, `rounded-sm`.
  - Размеры: обычно `px-6..8` и `py-[10px]` или `py-[14px]`.
  - Hover: `hover:bg-primary/90`.
- Secondary dark:
  - Фон `#222C40` или `dark-text`, белый текст.
  - Hover часто в `primary`.
- Ghost/Text:
  - Прозрачный фон, смена цвета текста на `primary` при hover.
- Icon buttons:
  - Круглые `h-10 w-10 rounded-full`, иногда со стеклянным/прозрачным фоном.

## 6) Карточки
- Базовый паттерн:
  - `rounded-sm`, часто `border`, фон `bg-white` (или тёмный в dark).
  - Лёгкая глубина через `drop-shadow-light` или мягкий border.
- Медиа-карточки (blog/portfolio/team):
  - Контейнер `overflow-hidden rounded-sm`.
  - Overlay-контент на `group-hover`, с `backdrop-blur`.
  - Акцентные лейблы с `bg-primary`.

## 7) Формы
- Поля:
  - Стиль underline: `border-b`, `bg-transparent`, `py-5`.
  - Текст `text-base font-medium`, placeholder в `dark-text`.
  - Focus: `focus:border-primary`.
- Контейнеры форм:
  - Большая карточка `rounded-sm border bg-white`, в dark -> тёмная поверхность без светлой границы.
- Чекбоксы:
  - Кастомные (`sr-only` + псевдо-box `h-5 w-5 rounded-sm border`).
- Кнопка submit:
  - Всегда `primary`, компактная высота, `font-semibold`.

## 8) Хедер и навигация
- Header поверх hero: `absolute top-0 left-0 w-full`.
- Sticky-состояние (utility `sticky`):
  - `fixed`, `z-9999`, `bg-white` / `dark:bg-dark`, уменьшенный `py`, blur + нижняя линия.
- Desktop nav:
  - Горизонтальный список, межпунктовые интервалы `lg:space-x-10`.
  - Dropdown (`Pages`) через `group-hover`, ширина ~`350px`, `rounded-sm border`.
- Mobile nav:
  - `menu-wrapper` как fullscreen overlay (`fixed`, `h-screen`, `bg-white`/`dark:bg-dark`).
  - Кнопка burger + отдельный toggler темы.

## 9) Общие принципы визуального стиля
- Современный SaaS-стиль: чистая геометрия, мягкие радиусы, много воздуха.
- Контрастный акцент: холодный синий (`primary`) на нейтральных светлых/тёмных подложках.
- Комбинация минималистичных границ и мягких теней вместо тяжёлых эффектов.
- Активное использование полупрозрачных слоёв и `backdrop-blur` для depth-эффекта.
- Последовательная иерархия: крупные заголовки Lexend + спокойный текст Inter.
