<div class="product_attributes clearfix">
        <!-- attributes -->
        <div id="attributes">
            <div class="clearfix"></div>
            {foreach from=$groups key=id_attribute_group item=group}
                {if $group.attributes|@count}
                    <fieldset class="attribute_fieldset">
                        <label class="attribute_label" {if $group.group_type != 'color' && $group.group_type != 'radio'}for="group_{$id_attribute_group|intval}"{/if}>{$group.name|escape:'html':'UTF-8'}&nbsp;</label>
                        {assign var="groupName" value="group_$id_attribute_group"}
                        <div class="attribute_list">
                            {if ($group.group_type == 'select')}
                                <select name="{$groupName}" id="group_{$id_attribute_group|intval}" class="form-control attribute_select no-print">
                                    {foreach from=$group.attributes key=id_attribute item=group_attribute}
                                        <option value="{$id_attribute|intval}"{if (isset($smarty.get.$groupName) && $smarty.get.$groupName|intval == $id_attribute) || $group.default == $id_attribute} selected="selected"{/if} title="{$group_attribute|escape:'html':'UTF-8'}">{$group_attribute|escape:'html':'UTF-8'}</option>
                                    {/foreach}
                                </select>
                            {elseif ($group.group_type == 'color')}
                                <ul id="color_to_pick_list" class="clearfix">
                                    {assign var="default_colorpicker" value=""}
                                    {foreach from=$group.attributes key=id_attribute item=group_attribute}
                                        {assign var='img_color_exists' value=file_exists($col_img_dir|cat:$id_attribute|cat:'.jpg')}
                                        <li{if $group.default == $id_attribute} class="selected"{/if}>
                                            <a href="{$link->getProductLink($product)|escape:'html':'UTF-8'}" id="color_{$id_attribute|intval}" name="{$colors.$id_attribute.name|escape:'html':'UTF-8'}" class="color_pick{if ($group.default == $id_attribute)} selected{/if}"{if !$img_color_exists && isset($colors.$id_attribute.value) && $colors.$id_attribute.value} style="background:{$colors.$id_attribute.value|escape:'html':'UTF-8'};"{/if} title="{$colors.$id_attribute.name|escape:'html':'UTF-8'}">
                                                {if $img_color_exists}
                                                    <img src="{$img_col_dir}{$id_attribute|intval}.jpg" alt="{$colors.$id_attribute.name|escape:'html':'UTF-8'}" title="{$colors.$id_attribute.name|escape:'html':'UTF-8'}" width="20" height="20" />
                                                {/if}
                                            </a>
                                        </li>
                                        {if ($group.default == $id_attribute)}
                                            {$default_colorpicker = $id_attribute}
                                        {/if}
                                    {/foreach}
                                </ul>
                                <input type="hidden" class="color_pick_hidden" name="{$groupName|escape:'html':'UTF-8'}" value="{$default_colorpicker|intval}" />
                            {elseif ($group.group_type == 'radio')}
                                <ul>
                                    {foreach from=$group.attributes key=id_attribute item=group_attribute}
                                        <li>
                                            <input type="radio" class="attribute_radio" name="{$groupName|escape:'html':'UTF-8'}" value="{$id_attribute}" {if ($group.default == $id_attribute)} checked="checked"{/if} />
                                            <span>{$group_attribute|escape:'html':'UTF-8'}</span>
                                        </li>
                                    {/foreach}
                                </ul>
                            {/if}
                        </div> <!-- end attribute_list -->
                    </fieldset>
                {/if}
            {/foreach}
        </div> <!-- end attributes -->
</div> <!-- end product_attributes -->