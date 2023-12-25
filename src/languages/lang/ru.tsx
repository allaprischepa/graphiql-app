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
  NOT_FOUND_TEXT,
  NOT_FOUND_TITLE,
  RELOAD_PAGE,
  SASHA_NAME,
  SASHA_TEXT,
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
  RU_EN,
  API_SETTINGS,
  ENDPOINT_SETUP_LABEL,
  ENDPOINT_SETUP_SAVE,
  ENDPOINT_SETUP_INTRO,
  ENDPOINT_VALIDATION_MSG,
  REQUIRED_MSG,
  REVERT_TEXT,
} from '../../constants';

const ru = {
  [NOT_FOUND_TITLE]: 'Извините... Страница не найдена',
  [NOT_FOUND_TEXT]: 'Пожалуйста, перейдите на домашнюю страницу',
  [GO_HOME]: 'Домой',
  [ERROR_PAGE_TITLE]: 'Извините... Произошла ошибка',
  [ERROR_PAGE_TEXT]: 'Пожалуйста, попробуйте перезагрузить страницу',
  [RELOAD_PAGE]: 'Перезагрузить страницу',

  [RU_EN.HEADER_NAV.LANG_LABEL]: 'РУ',
  [RU_EN.HEADER_NAV.SIGN_IN]: 'Вход',
  [RU_EN.HEADER_NAV.SIGN_UP]: 'Регистрация',
  [RU_EN.HEADER_NAV.MAIN]: 'Главная',

  [RU_EN.FORMS.FIELD.NAME]: 'Имя',
  [RU_EN.FORMS.FIELD.EMAIL]: 'Эл. почта',
  [RU_EN.FORMS.FIELD.PASSWORD]: 'Пароль',
  [RU_EN.FORMS.FIELD.CONFIRM_PASSWORD]: 'Повторите пароль',

  [RU_EN.FORMS.BUTTON.SIGN_UP]: 'ЗАРЕГИСТРИРОВАТЬСЯ',
  [RU_EN.FORMS.BUTTON.SIGN_IN]: 'ВОЙТИ',

  [RU_EN.FORMS.QUESTION.SIGN_UP]: 'Уже есть аккаунт?',
  [RU_EN.FORMS.QUESTION.SIGN_IN]: 'Нет аккаунта?',

  [RU_EN.FORMS.LINK.SIGN_UP]: 'Войдите!',
  [RU_EN.FORMS.LINK.SIGN_IN]: 'Зарегистрируйтесь!',

  [RU_EN.VALID.NAME.REQUIRED]: 'введите имя',
  [RU_EN.VALID.NAME.MAX]: 'не более 32 символов',
  [RU_EN.VALID.NAME.START_LETTER]: 'должно начинаться с буквы',

  [RU_EN.VALID.EMAIL.REQUIRED]: 'введите эл. почту',
  [RU_EN.VALID.EMAIL.VALID]: 'адрес должен быть корректным',

  [RU_EN.VALID.PASSWORD.REQUIRED]: 'введите пароль',
  [RU_EN.VALID.PASSWORD.MIN]: 'не менее 8 символов',
  [RU_EN.VALID.PASSWORD.HAS_NUMBER]: 'должен содержать цифру',
  [RU_EN.VALID.PASSWORD.HAS_LETTER]: 'должен содержать букву',
  [RU_EN.VALID.PASSWORD.HAS_SPECIAL]: 'должен содержать спецсимвол',

  [RU_EN.VALID.CONFIRM.REQUIRED]: 'введите пароль повторно',
  [RU_EN.VALID.CONFIRM.MATCH_PASSWORD]: 'пароли должны совпадать',

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
  [API_SETTINGS]: 'Настройки API',
  [ENDPOINT_SETUP_LABEL]: 'URL конечной точки',
  [ENDPOINT_SETUP_SAVE]: 'Сохранить',
  [ENDPOINT_SETUP_INTRO]:
    'Настройте URL-адрес конечной точки GraphQL в соответствии с вашими потребностями при выполнении запросов. Вы можете вернуться к исходной конечной точке, нажав кнопку "Вернуться" и сохранив изменения.',
  [ENDPOINT_VALIDATION_MSG]:
    'Конечная точка должна представлять собой корректный URL-адрес',
  [REQUIRED_MSG]: 'Это поле обязательно для заполнения',
  [REVERT_TEXT]: 'Установить начальную конечную точку',
};

export default ru;
