import {
  ALLA_NAME,
  ALLA_TEXT,
  DOC_DESCR,
  DOC_TITLE,
  ERROR_PAGE_TEXT,
  ERROR_PAGE_TITLE,
  FEATURE_DOCUMENTATION,
  FEATURE_ENDPOINTS,
  FEATURE_HIGHLIGHTING,
  FEATURE_LANGUAGES,
  FEATURE_PRETTIFYING,
  FEATURE_RESPONSIVE,
  GO_HOME,
  HERO_AUTH,
  HERO_ENDPOINTS,
  HERO_RSS,
  HERO_SUBTITLE,
  LANG_LABEL,
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
  RELOAD_PAGE,
  SASHA_NAME,
  SASHA_TEXT,
  SIGN_IN,
  SIGN_OUT,
  TEAM_LEAD,
  TITLE_FEATURES,
  TITLE_TEAM,
  ZENA_NAME,
  ZENA_TEXT,
  MAIN_INTRO,
  EXECUTE_QUERY,
  PRETTIFY_QUERY,
  VARIABLES,
  HEADERS,
  QUERY_ERR_MSG_PREFIX,
  DEFAULT_QUERY_ERR_MSG,
  INVALID_VARIABLES_ERR_MSG,
  INVALID_HEADERS_ERR_MSG,
  HEADER_NAME,
  HEADER_VALUE,
  IS_INVALID,
  HEADER_VALIDATION_MSG,
  TYPE_STRING_VALIDATION_MSG,
  DOC_SUBTITLE_ROOT,
  DOC_SUBTITLE_FIELDS,
  DOC_SUBTITLE_ALL_SHEME,
} from '../../constants';

const ru = {
  [NOT_FOUND_TITLE]: 'Извините... Страница не найдена',
  [NOT_FOUND_TEXT]: 'Пожалуйста, перейдите на домашнюю страницу',
  [GO_HOME]: 'Домой',
  [ERROR_PAGE_TITLE]: 'Извините... Произошла ошибка',
  [ERROR_PAGE_TEXT]: 'Пожалуйста, попробуйте перезагрузить страницу',
  [RELOAD_PAGE]: 'Перезагрузить страницу',

  [LANG_LABEL]: 'РУ',
  [SIGN_IN]: 'Войти',
  [SIGN_OUT]: 'Регистрация',

  [HERO_SUBTITLE]: 'GraphiQL - это песочница/IDE для graphQL запросов',
  [HERO_AUTH]:
    'Приложение включает в себя возможности авторизации и аутентификации, обеспечивая доступ к инструменту только авторизованным пользователям.',
  [HERO_ENDPOINTS]:
    'Pаботает с указанной пользователем открытой конечной точкой GraphQL.',
  [HERO_RSS]: 'Приложение является результатом выполнения финального проекта',

  [FEATURE_HIGHLIGHTING]: 'Подсветка синтаксиса для GraphQL запросов',
  [FEATURE_PRETTIFYING]: 'Редактор запросов с форматированием текста',
  [FEATURE_DOCUMENTATION]: 'Ленивая загрузка документации',
  [FEATURE_LANGUAGES]: 'Доступность на двух языках',
  [FEATURE_ENDPOINTS]:
    'Работает с любой конечной точкой API, указанной пользователем',
  [FEATURE_RESPONSIVE]: 'Адаптивный дизайн от десктопа до мобильных устройств',

  [TITLE_FEATURES]: 'Характеристики',
  [TITLE_TEAM]: 'Наша команда',

  [ALLA_NAME]: 'Алла Прищепа',
  [SASHA_NAME]: 'Александр Филимонов',
  [ZENA_NAME]: 'Евгения Мостовая',
  [ALLA_TEXT]:
    'Несколько лет работала Back-End-разработчиком на Drupal, имеет опыт разработки на PHP и теперь решила отправиться в увлекательное путешествие с RSSchool, чтобы получить новые навыки во Front-End.',
  [SASHA_TEXT]:
    'Это хорошо обученный и готовый к работе специалист с солидным техническим образованием. Приобретает новые навыки в области фронтенд-разработки, изучая React.',
  [ZENA_TEXT]:
    'Имеет хороший коммерческий опыт разработки веб-сайтов с использованием HTML, CSS и JavaScript. На данный момент изучает React, чтобы выйти на новый уровень разработки.',

  [TEAM_LEAD]: 'Тимлид',

  [DOC_TITLE]: 'Документация',
  [DOC_SUBTITLE_ROOT]: 'Корневые типы',
  [DOC_SUBTITLE_FIELDS]: 'Поля',
  [DOC_SUBTITLE_ALL_SHEME]: 'Все типы схемы',
  [DOC_DESCR]:
    'Схема GraphQL предоставляет корневой тип для каждого типа операций.',

  [MAIN_INTRO]: `  Добро пожаловать в GraphiQL!

  GraphiQL — это браузерный инструмент для написания, валидации
  и тестирования GraphQL-запросов.

  Начните вводить свои запросы здесь, в поле редактора.
  Наслаждайтесь удобством интеллектуальной подсветки синтаксиса
  при составлении GraphQL-запросов.

  Запросы GraphQL обычно начинаются с символа «{».
  Строки, начинающиеся с #, игнорируются.

  Пример GraphQL-запроса может выглядеть так:

    {
      field(arg: "value") {
        subField
      }
    }

  Выполнить запрос:        нажмите кнопку воспроизведения
  Форматировать запрос:    нажмите кнопку форматирования`,
  [EXECUTE_QUERY]: 'Выполнить запрос',
  [PRETTIFY_QUERY]: 'Форматировать запрос',
  [VARIABLES]: 'Переменные',
  [HEADERS]: 'Заголовки',
  [QUERY_ERR_MSG_PREFIX]: 'Ошибка запроса',
  [DEFAULT_QUERY_ERR_MSG]:
    'Что-то пошло не так. Пожалуйста, повторите попытку позже или выберите другую конечную точку.',
  [INVALID_VARIABLES_ERR_MSG]: 'Переменные содержат некорректный JSON',
  [INVALID_HEADERS_ERR_MSG]: 'Заголовки содержат некорректный JSON',
  [HEADER_NAME]: 'Имя заголовка',
  [HEADER_VALUE]: 'Значение заголовка',
  [IS_INVALID]: 'некорректно',
  [HEADER_VALIDATION_MSG]:
    'Может содержать только буквенно-цифровые символы и следующие специальные символы',
  [TYPE_STRING_VALIDATION_MSG]: 'Это должна быть только строка',
};

export default ru;
