import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProductItem = props => {
  const { title, productLink, description, imgSrc, price, addToCart } = props;

// description: "Aboca NeoFitoroid Cleansing Protective and Soothing Cream 100ml - это защитный и успокаивающий очищающий крем, основанный на определенных молекулярных комплексах растений для анальной и перианальной области.↵↵Этот крем с гелидолом, эфирными маслами мелалеуки и тимьяна сочетает в себе очищающее действие с защитным действием и, следовательно, успокаивающее, полезное для облегчения генов, присутствующих в случае геморроя.↵↵Рекомендуется для очищения анальной и перианальной области в случае геморроя, в качестве адъюванта к специфическому терапевтическому лечению и во всех случаях воспаления, раздражения, покраснения и сухости.↵↵Он также идеально подходит для повседневного использования, особенно для людей с рецидивирующими геморроидальными расстройствами и во всех случаях повышенной чувствительности и восприимчивости к раздражениям (запор, диарея, диета и неправильный образ жизни).↵↵Не содержит SLS и SLES, нефтепродукты, парабены, ПЭГ, красители и синтетические ароматы.↵↵↵↵Применение:↵↵Нанесите на части, которые необходимо очистить, давая им действовать за несколько секунд до полоскания. Тщательно промойте и протрите, не протирая. Повторите заявку после каждого удаления стула.↵↵↵↵Состав:↵↵Substances fonctionnelles : Extraits lyophilisés de sommités fleuries d'Hélichryse fraction lipophile (Helydol)* et de Racine de Fragon Epineux*, Gel de Feuilles d'Aloé Vera déshydraté*, Solution aqueuse de sommités fleuries d'Hélichryse*, Extrait huileux de sommités fleuries de Millepertuis*, Huile de Jojoba*, Beurre de Karité*, Huile de Tournesol*, Huiles essentielles de Melaleuca et Thym Rouge.↵↵Base lavante : constituée de tensioactifs d'origine végétale, dont le Coco-Glucoside et le Cocoyl Glutamate de Sodium et Disodium.↵↵Contient aussi : Eau Déionisée, Acide Lactique, Glycérine, Triglycéride Caprylique/Caprique, Citrate de Stéarate de Glycéryle, Alcool Cétylstéarylique, Stéaroyl Glutamate de Sodium, Stéarate de Glycéryle, Gomme Xanthane, Tocophérol, Carraghénanes, Glucose, Benzoate de Sodium, Sorbate de Potassium, Alcool Benzylique.↵*Ingrédient issu de l'Agriculture Biologique."
// imgSrc: "http://lefarma.ru/image/cache/catalog/li/gigiena-intimnaya-gigiena-milo/aboca-neofitoroid-cleansing--350x470.jpeg"
// price: "898"
// title: "ABOCA NEOFITOROID CLEANSING PROTECTIVE AND SOOTHING CREAM 100ML"

  const onAddOrderToCart = () => {
    addToCart({title, productLink, imgSrc, price, quantity: 1})
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
        <CardSubtitle>{price}</CardSubtitle>
        <Button onClick={onAddOrderToCart}>В корзину</Button>
        <CardText>{description}</CardText>
      </CardBody>  
    </Card> 
  );
};

export default ProductItem;