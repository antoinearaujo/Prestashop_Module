<?php

class Monmodule extends Module
{
    public function __construct()
    {
        $this->name = 'monmodule';
        $this->tab = 'Mes modules';
        $this->version = '0.1.0';
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('Mon premier module');
        $this->description = $this->l('Description de mon premier module');
    }

    public function install()
    {
        return
            parent::install() &&
            $this->registerHook('displayHeader') &&
            $this->registerHook('displayProductListFunctionalButtons');
    }

    public function getContent()
    {
        $html = '';

        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('MM_ATTR_ID'))) {
                Configuration::updateValue('MM_ATTR_ID', (int)(Tools::getValue('MM_ATTR_ID')));
//                $this->_clearCache('blockpaymentlogo.tpl');
                $html .= $this->displayConfirmation($this->l('The settings have been updated.'));
            }
        }

        return $html . $this->renderForm();
    }

    public function renderForm()
    {
        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Settings'),
                    'icon' => 'icon-cogs'
                ),
                'input' => array(
                    array(
                        'type' => 'select',
                        'label' => $this->l('Attribut'),
                        'name' => 'MM_ATTR_ID',
                        'required' => true,
                        'options' => array(
                            'query' => AttributeGroup::getAttributesGroups($this->context->language->id),
                            'id' => 'id_attribute_group',
                            'name' => 'name'
                        )
                    ),
                ),
                'submit' => array(
                    'title' => $this->l('Save'),
                )
            ),
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

    public function getConfigFieldsValues()
    {
        return array(
            'MM_ATTR_ID' => Tools::getValue('MM_ATTR_ID', Configuration::get('MM_ATTR_ID')),
        );
    }

    public function hookDisplayHeader($params)
    {
        $this->context->controller->addCSS($this->_path . '/css/style.css', 'all');
        return;

    }

    public function hookDisplayProductListFunctionalButtons($params)
    {
        $product = $params['product'];
        $products = array();

        $id_product = $product['id_product'];


        $attributes_by_product = Product::getAttributesInformationsByProduct($id_product);

        $attributes_by_product =  AttributeGroup::getAttributesGroups($this->context->language->id);


        p($attributes_by_product);
        /*foreach($attributes_by_product as $attributes){
            $products = $attributes_by_product['id_attributes_group'];
        }





        // $this->smarty->assign('MM_ATTR_ID', $attributes_by_product);

       // return $products;
*/
    }
}