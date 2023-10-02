const userBirthYear = +prompt('Який ваш рік народження?');
const userCity = prompt('В якому місті ви живете?');
const userFavSport = prompt('Який ваш улюблений спорт?');

userBirthYear ? alert(`Вам ${2023 - userBirthYear}`) : alert('Шкода що ти не захотів вказувати рік народження(');

switch (userCity) {
    case 'Київ':
        alert('Ти живеш у столиці України!');
        break;
    case 'Вашингтон':
        alert('Ти живеш у столиці Сполучених Штатів Америки!');
        break;
    case 'Лондон':
        alert('Ти живеш у столиці Англії!');
        break;
    case null:
        alert('Шкода що ти не захотів вказувати місто(');
        break;
    default:
        alert(`Ти живеш у місті ${userCity}`);
}

switch (userFavSport) {
    case 'Футбол':
        alert('Круто! Хочеш стати Ліонелем Мессі');
        break;
    case 'Баскетбол':
        alert('Круто! Хочеш стати Кобі Браянтом');
        break;
    case 'Формула 1':
        alert('Круто! Хочеш стати Льюїсом Хемілтоном');
        break;
    case null:
        alert('Шкода що ти не захотів вказувати улюблений спорт(');
        break;
    default:
        alert(`Твій улюблений спорт ${userFavSport}`);
}