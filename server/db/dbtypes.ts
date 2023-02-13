import {  Prisma } from "@prisma/client";




const productvariantValidator = Prisma.validator<Prisma.productvariantArgs>()({});
export type ProductVariantType = Prisma.productvariantGetPayload<
	typeof productvariantValidator
  >;




const productvariantValidator_Include_options = Prisma.validator<Prisma.productvariantArgs>()({
	include:{options:true}
  });
export type ProductVariantType_Include_Options = Prisma.productvariantGetPayload<
	typeof productvariantValidator_Include_options
  >;





const VariationOptionValidator = Prisma.validator<Prisma.variationOptionArgs>()({});
export type VariationOptionType = Prisma.variationOptionGetPayload<
	typeof VariationOptionValidator
  >;
  const VariationOptionValidator_Include_OptionValue = Prisma.validator<Prisma.variationOptionArgs>()({
	include:{variation:true}
  });
export type VariationOptionType_Include_OptionValue = Prisma.variationOptionGetPayload<
	typeof VariationOptionValidator_Include_OptionValue
  >;
