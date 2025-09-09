<!DOCTYPE html>
<html lang="{{ $locale }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alt.Ay.Sel — {{ $locale === 'az' ? 'Xəbərlər' : 'Новости' }}</title>

    <meta name="description" content="Altaysel Co — {{ $locale === 'az' ? 'Xəbərlər' : 'Новости' }}">
    <meta name="keywords" content="Altaysel Co, news, future projects, architecture">

    <link rel="icon" href="{{ asset('style/imgs/Vector1.svg') }}" type="image/svg+xml">
    <link rel="stylesheet" href="{{ asset('style/style.css') }}">
    <link rel="stylesheet" href="{{ asset('style/projects.css') }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    @if ($locale === 'ru')
        <link rel="stylesheet" href="{{ asset('style/ru_style.css') }}">
    @endif
    <style>
        .projects__container-news {
            max-width: 1300px;
            margin: 0 auto;
            margin-top: 50px;

        }

        .projects__block {
            width: 100%;
            margin-top: 35px;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-between;
        }

        .projects__block-element {
            width: 390px;
            height: 440px;
            margin-bottom: 15px
        }

        .projects__block-hover__name {
            font-size: 19px;
            line-height: 22px;
        }

        @media only screen and (max-width: 770px) {
            .projects__block {
                align-items: center;
                flex-direction: column;
            }
        }
    </style>
</head>

<body id="background_change">
    <div id="background_change" class="main__wrapper">
        @include('components.header_nw')
        <!--? ---MAIN BLOCK------->
        <div class="main__block" id="background_change_main">

            <!--* container for all----->
            <div class="main__block__container">
                <!--* block with slider----->
                <div class="main__block__slider">
                    <!-- Swiper -->
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">



                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <!--* block with THEME CHANGER----->
                <div class="main__block__theme-changer">
                    <div class="__theme-surface">
                        <div class="__theme-surface__circle"></div>
                        <div class="__theme-surface__sun">
                            <img src="" alt="">
                        </div>
                        <div class="__theme-surface__moon">
                            <img src="" alt="">
                        </div>
                        <div class="__theme-surface__sun"></div>
                    </div>
                </div>
                <!--* block with MAIN NAME ----->
                <div class="main__block__name">
                    <div class="main__block__name-container">
                        <div class="__name-link__main-name">
                            Alt<span>.</span>Ay<span>.</span>Sel
                        </div>
                        <div class="__name-link__main-desc">

                            {{ $locale === 'az' ? 'Reklam tikinti şirkəti' : 'Рекламно строительное бюро' }}
                        </div>
                        <div class="__name-link__main-info">

                            {{ $locale === 'az' ? 'Hər çətin asan olur, amma çətin asan olur.' : 'Любая трудность становится легкой, но сложное становится легким' }}
                        </div>
                        <div class="__name-link__main-co">
                            co
                        </div>
                    </div>
                </div>

                <!--*  LINK -> contact------>
                <div class="main__block__link header__navigation__container">
                    <button data-target="#contactBlock">
                        {{ $locale === 'az' ? 'Bizimlə əlaqə' : 'Связь с нами' }}
                    </button>
                </div>

                <!--* block with MAIN SERVICES * 3 tiles----->
                <div class="main__block__services header__navigation__container">
                    <div class="main__block__services__container">

                        <div id="background_change_main_services" class="main__block__services-element">
                            <div class="__services-element__container">
                                <div id="color_change" class="__services-element__type">
                                    {{ $locale === 'az' ? 'Tikinti Insaat' : 'Строительное И Ландшафтное ' }}
                                </div>
                                <div id="color_change" class="__services-element__name">

                                    {{ $locale === 'az' ? 'LAYİHƏLƏNDİRMƏ' : 'ПРОЕКТИРОВАНИЕ ' }}
                                </div>
                                <div class="__services-element__link">
                                    <button data-target="#servicesBlock">
                                        <img src="" alt="">
                                        <p id="color_change">
                                            {{ $locale === 'az' ? 'ƏTRAFLI MƏLUMAT' : 'БОЛЬШЕ ИНФОРМАЦИИ ' }}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="background_change_main_services" class="main__block__services-element">
                            <div class="__services-element__container">
                                <div id="color_change" class="__services-element__type">
                                    {{ $locale === 'az' ? 'İnteryer və eksteryer' : 'Интерьер и экстерьер' }}
                                </div>
                                <div id="color_change" class="__services-element__name">
                                    {{ $locale === 'az' ? 'DİZAYN' : 'ДИЗАЙН' }}
                                </div>
                                <div class="__services-element__link">
                                    <button data-target="#servicesBlock">
                                        <img src="" alt="">
                                        <p id="color_change">
                                            {{ $locale === 'az' ? 'ƏTRAFLI MƏLUMAT' : 'БОЛЬШЕ ИНФОРМАЦИИ ' }}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="background_change_main_services" class="main__block__services-element">
                            <div class="__services-element__container">
                                <div id="color_change" class="__services-element__type">
                                    {{ $locale === 'az' ? 'Memarlıq və interyer dizayn' : 'Архитектура и интерьерный дизайн' }}
                                </div>
                                <div id="color_change" class="__services-element__name">
                                    {{ $locale === 'az' ? 'TƏDRİS MƏRKƏZİ' : 'ОБРАЗОВАНИЯ' }}
                                </div>
                                <div class="__services-element__link">
                                    <button data-target="#servicesBlock">
                                        <img src="" alt="">
                                        <p id="color_change">
                                            {{ $locale === 'az' ? 'ƏTRAFLI MƏLUMAT' : 'БОЛЬШЕ ИНФОРМАЦИИ ' }}
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <section class="projects__section">
            <div class="projects__container projects__container-news">
                <div class="projects__desc-block">
                    <div class="projects__block-name">
                        <div class="projects__block-name_name">
                            {{ $locale === 'az' ? 'Xəbərlər' : 'Новости' }}
                        </div>
                        <div class="projects__block-name_line">

                        </div>
                        <div class="projects__block-name_desc">

                        </div>
                    </div>
                </div>

                <div class="projects__block">
                    @forelse ($all_news as $index => $news_item)
                        <div class="projects__block-element">
                            <a class="projects__block-element-image"
                               >
                                <img src="{{ asset('./archi/public/uploads/projects/' . $news_item->main_image) }}"
                                    alt="">
                            </a>

                            <div class="projects__block-element-hover">
                                <a class="projects__block-hover__name"
                                    >
                                    {{ $locale === 'az' ? $news_item->name_az : $news_item->name_ru }}
                                </a>

                                <div class="projects__block-hover__popup">
                                    <img src="{{ asset('style/imgs/project_popup.svg') }}" alt="">
                                    <p>
                                        <a
                                            href="{{ route('single_news', ['locale' => $locale, 'id' => $news_item->id]) }}" style="color: #fff;">
                                            {{ $locale === 'az' ? 'ƏTRAFLI MƏLUMAT' : 'ДЕТАЛЬНАЯ ИНФОРМАЦИЯ' }}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    @empty
                        <p style="padding: 2rem 0;">
                            {{ $locale === 'az' ? 'Hələlik xəbər yoxdur.' : 'Пока нет новостей.' }}
                        </p>
                    @endforelse
                </div>

            </div>
        </section>

        @include('components.footer_pr')
    </div>

    {{-- При необходимости подключи свой JS для попапа новостей --}}
    <script src="{{ asset('js/projects.js') }}"></script>
</body>

</html>
