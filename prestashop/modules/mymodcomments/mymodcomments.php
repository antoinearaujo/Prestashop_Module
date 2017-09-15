<?php

class MyModComments extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'mymodcomments';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Module de commentaire produit';
        $this->description = 'Avec ce module, mes clients pourront commenter les produits et donner leurs avis';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();

        // Activate every option by default
        Configuration::updateValue('MYMOD_GRADES', 1);
        Configuration::updateValue('MYMOD_COMMENTS', 1);
        Configuration::updateValue('MYMOD_MAJ', "");
        Configuration::updateValue('MYMOD_STY', "Cursive");


        $this->registerHook('displayProductTabContent');
        $this->registerHook('displayProductListFunctionalButtons');
        $this->registerHook('displayHomeTab');
        $this->registerHook('displayProductDeliveryTime');

        return true;
    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();

        $html = $this->processConfiguration();
        $html .= $this->displayConfirmation($this->l('The settings have been updated.'));

        return $html . $this->renderForm();
    }

    public function renderForm() // Construction du formulaire (BackOffice)
    {
        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Settings'),
                    'icon' => 'icon-cogs'
                ),
                'input' => array(
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Avis'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Autoriser l`affichage des avis'),     //description on scroll
                        'desc' => $this->l(''),
                        'name' => 'MYMOD_GRADES',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Commentaires'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Autoriser l`écriture d`un avis'),     //description on scroll
                        'name' => 'MYMOD_COMMENTS',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),
                    array(
                        'type' => 'text',
                        'label' => $this->l('Nombre de commentaires'),
                        'name' => 'MYMOD_NBCOM',
                        'class' => 'lg',
                        'required' => true,
                        'desc' => $this->l(''),
                        'hint' => $this->l('Entrez le nombre de commentaires que vous voulez afficher'),     //description on scroll

                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Majuscule ?'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Activer les majuscules'),     //description on scroll
                        'name' => 'MYMOD_MAJ',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),
                    array(
                        'type' => 'color',
                        'label' => $this->l('Couleur'),
                        'name' => 'MYMOD_COL',
                        'class' => 'lg',
                        'required' => true,
                        'desc' => $this->l(''),
                        'hint' => $this->l('Choisir la couleur du texte'),
                    ),
                    array(
                        'type' => 'select',
                        'label' => $this->l('Style de la police'),
                        'hint' => $this->l('Choisir le style de la police'),     //description on scroll
                        'name' => 'MYMOD_STY',
                        'required' => true,
                        'options' => array(
                            'query' => array(
                                array(
                                    'id_option' => 'Cursive',
                                    'name' => 'Cursive'
                                ),
                                array(
                                    'id_option' => 'Arial',
                                    'name' => 'Arial'
                                ),
                                array(
                                    'id_option' => 'Impact',
                                    'name' => 'Impact'
                                ),
                            ),
                            'id' => 'id_option',
                            'name' => 'name'
                        )
                    ),
                    array(
                        'type' => 'select',
                        'label' => $this->l('Taille de la police'),
                        'hint' => $this->l('Choisir la taille de la police'),     //description on scroll
                        'name' => 'MYMOD_POL',
                        'required' => true,
                        'options' => array(
                            'query' => array(
                                array(
                                    'id_option' => '1',
                                    'name' => 'Grosse Police'
                                ),
                                array(
                                    'id_option' => '3',
                                    'name' => 'Moyenne Police'
                                ),
                                array(
                                    'id_option' => '5',
                                    'name' => 'Petite Police'
                                ),
                            ),
                            'id' => 'id_option',
                            'name' => 'name'
                        )
                    ),

                ),
                'submit' => array(
                    'title' => $this->l('Save'),
                )
            )
        );

        $helper = new HelperForm();
        $lang = new Language((int)Configuration::get('PS_LANG_DEFAULT'));
        $helper->default_form_language = $lang->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
        $helper->identifier = $this->identifier;
        $helper->submit_action = 'submit' . $this->name;
        $helper->currentIndex = $this->context->link->getAdminLink('AdminModules', false) . '&configure=' . $this->name . '&tab_module=' . $this->tab . '&module_name=' . $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->tpl_vars = array(
            'fields_value' => $this->getConfigFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id
        );

        return $helper->generateForm(array($fields_form));
    }

    public function getConfigFieldsValues() // Sauvegarder la valeur enregistrée dans la configuration du module
    {
        return array(
            'MYMOD_GRADES' => Tools::getValue('MYMOD_GRADES', Configuration::get('MYMOD_GRADES')),
            'MYMOD_COMMENTS' => Tools::getValue('MYMOD_COMMENTS', Configuration::get('MYMOD_COMMENTS')),
            'MYMOD_MAJ' => Tools::getValue('MYMOD_MAJ', Configuration::get('MYMOD_MAJ')),
            'MYMOD_COL' => Tools::getValue('MYMOD_COL', Configuration::get('MYMOD_COL')),
            'MYMOD_STY' => Tools::getValue('MYMOD_STY', Configuration::get('MYMOD_STY')),
            'MYMOD_POL' => Tools::getValue('MYMOD_POL', Configuration::get('MYMOD_POL')),
            'MYMOD_NBCOM' => Tools::getValue('MYMOD_NBCOM', Configuration::get('MYMOD_NBCOM')),

        );
    }


    public function processConfiguration() // Recuperation des valeurs
    {
        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('MYMOD_GRADES')) && Validate::isMessage(Tools::getValue('MYMOD_COMMENTS'))) {
                Configuration::updateValue('MYMOD_GRADES', (int)(Tools::getValue('MYMOD_GRADES')));
                Configuration::updateValue('MYMOD_COMMENTS', (int)(Tools::getValue('MYMOD_COMMENTS')));
                Configuration::updateValue('MYMOD_MAJ', (int)(Tools::getValue('MYMOD_MAJ')));
                Configuration::updateValue('MYMOD_COL', (string)(Tools::getValue('MYMOD_COL')));
                Configuration::updateValue('MYMOD_STY', (string)(Tools::getValue('MYMOD_STY')));
                Configuration::updateValue('MYMOD_POL', (int)(Tools::getValue('MYMOD_POL')));
                Configuration::updateValue('MYMOD_NBCOM', (int)(Tools::getValue('MYMOD_NBCOM')));

            }
        }
    }

    public function assignConfiguration() // Assignation des variables
    {

        $enable_grades = (bool)Configuration::get('MYMOD_GRADES');
        $enable_comments = (bool)Configuration::get('MYMOD_COMMENTS');
        $enable_maj = (bool)Configuration::get('MYMOD_MAJ');
        $enable_col = (string)Configuration::get('MYMOD_COL');
        $enable_sty = (string)Configuration::get('MYMOD_STY');
        $enable_pol = (int)Configuration::get('MYMOD_POL');
        $enable_nbcom = (int)Configuration::get('MYMOD_NBCOM');

        $this->context->smarty->assign(array(
            'enable_grades' => $enable_grades,
            'enable_comments' => $enable_comments,
            'enable_maj' => $enable_maj,
            'enable_col' => $enable_col,
            'enable_sty' => $enable_sty,
            'enable_pol' => $enable_pol,
            'enable_nbcom' => $enable_nbcom,


        ));

    }

    public function hookDisplayProductTabContent($params) // Hook Pour placer le module au bon endroit
    {
        $this->processProductTabContent();
        $this->assignProductTabContent();
        return $this->display(__FILE__, 'displayProductTabContent.tpl');
    }

    public function hookDisplayProductListFunctionalButtons($params)
    {

        //--Choppe la note generale d'un produit

        $id_product = $params['product']['id_product']; // recuperation de l'id du produit concerné
        $grade_general = Db::getInstance()->getRow('
        SELECT COUNT(*) AS `nbAvis`, AVG(`grade`*10) AS `moyAvis` 
        FROM `' . _DB_PREFIX_ . 'mymod_comment`
        WHERE `id_product` = ' . $id_product); // requete pour avoir la moyenne des notes de CE produit




        // Choppe le dernier commentaire

        $last_comment = Db::getInstance()->getRow('
        SELECT `comment` AS `comment` 
        FROM `' . _DB_PREFIX_ . 'mymod_comment` C,`' . _DB_PREFIX_ . 'product`
        WHERE C.`id_product` = ' . $id_product . '
        ORDER BY C.`date_add` DESC');


        $this->context->smarty->assign(array(
            'grade_general' => $grade_general,
            'last_comment' => $last_comment));


        return $this->display(__FILE__, 'displayProductListFunctionalButtons.tpl');
    }


    public function displayHomeTab($params)
    {
        return $this->hookDisplayProductListFunctionalButtons($params);
    }

    public function processProductTabContent()// Insertion commentaire du client dans la BDD
    {
        if (Tools::isSubmit('mymod_pc_submit_comment')) {
            $id_product = Tools::getValue('id_product');
            $grade = Tools::getValue('grade');
            $comment = Tools::getValue('comment');
            $insert = array(
                'id_product' => (int)$id_product,
                'grade' => (int)$grade,
                'comment' => pSQL($comment),
                'date_add' => date('Y-m-d H:i:s'),
            );
            Db::getInstance()->insert('mymod_comment', $insert);
            $url = $this->context->link->getProductLink($this->context->controller->getProduct());
            Tools::redirect($url);
            exit;
        }
    }

    public function assignProductTabContent() // Assignation des valeurs a des variables
    {
        $id_product = Tools::getValue('id_product'); // recuperation du produit concerné
        $enable_grades = Configuration::get('MYMOD_GRADES');
        $enable_comments = Configuration::get('MYMOD_COMMENTS');
        $enable_maj = Configuration::get('MYMOD_MAJ');
        $enable_col = Configuration::get('MYMOD_COL');
        $enable_sty = Configuration::get('MYMOD_STY');
        $enable_pol = Configuration::get('MYMOD_POL');
        $enable_nbcom = Configuration::get('MYMOD_NBCOM');


        //--Choppe les comms dans la bdd

        $comments = Db::getInstance()->executeS('
        SELECT `date_add` AS `date`, `comment` AS `comment`, `grade` AS `grade` FROM `' . _DB_PREFIX_ . 'mymod_comment`
        WHERE `id_product` = ' . (int)$id_product);


        // affiche avec smarty

        $this->context->smarty->assign(array(
            'enable_grades' => $enable_grades,
            'enable_comments' => $enable_comments,
            'enable_maj' => $enable_maj,
            'enable_col' => $enable_col,
            'enable_sty' => $enable_sty,
            'enable_pol' => $enable_pol,
            'enable_nbcom' => $enable_nbcom,
            'comments' => $comments,
        ));


    }


}