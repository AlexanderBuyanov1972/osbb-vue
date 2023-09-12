import ButtonSimple from "@/ui/elements/ButtonSimple.vue";
import ButtonReset from "@/ui/elements/ButtonReset.vue";
import InputSimple from "@/ui/elements/InputSimple.vue";
import SelectSimple from "@/ui/elements/SelectSimple.vue";
import SelectEdit from "@/ui/elements/SelectEdit.vue";
import CheckboxSimple from "@/ui/elements/CheckboxSimple.vue";

import BlockMessages from "@/pages/blocks/BlockMessages.vue";
import BlockInformationAboutHouse from "@/pages/blocks/BlockInformationAboutHouse.vue";
import BlockErrorMessage from "@/pages/blocks/BlockErrorMessage.vue";

import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";

import BlockCreateOwner from "@/pages/blocks/create/BlockCreateOwner.vue";
import BlockCreatePassword from "@/pages/blocks/create/BlockCreatePassword.vue";
import BlockCreateOwnership from "@/pages/blocks/create/BlockCreateOwnership.vue";
import BlockCreateAddress from "@/pages/blocks/create/BlockCreateAddress.vue";

import BlockEditOwner from "@/pages/blocks/edit/BlockEditOwner.vue";
import BlockEditPassword from "@/pages/blocks/edit/BlockEditPassword.vue";
import BlockEditOwnership from "@/pages/blocks/edit/BlockEditOwnership.vue";
import BlockEditAddress from "@/pages/blocks/edit/BlockEditAddress.vue";

import BlockReadOwner from "@/pages/blocks/read/BlockReadOwner.vue";
import BlockReadPassword from "@/pages/blocks/read/BlockReadPassword.vue";
import BlockReadOwnership from "@/pages/blocks/read/BlockReadOwnership.vue";
import BlockReadAddress from "@/pages/blocks/read/BlockReadAddress.vue";

export default [
  InputSimple,
  ButtonSimple,
  ButtonReset,
  SelectSimple,
  SelectEdit,
  CheckboxSimple,
  BlockCreateAddress,
  BlockCreateOwnership,
  BlockCreateOwner,
  BlockCreatePassword,
  BlockMessages,
  BlockErrorMessage,

  OwnerItem,
  OwnershipItem,

  BlockEditAddress,
  BlockEditOwnership,
  BlockEditOwner,
  BlockEditPassword,

  BlockReadAddress,
  BlockReadOwnership,
  BlockReadOwner,
  BlockReadPassword,

  BlockInformationAboutHouse,
];
