import React, { ReactNode } from 'react';
import { ButtonClick, FadeProps, Responsive, SlideProps, TweenEasingFn, ZoomProps } from './types';
export declare const getStartingIndex: (children: ReactNode, defaultIndex?: number | undefined) => number;
export declare const getResponsiveSettings: (wrapperWidth: number, responsive?: Responsive[] | undefined) => Responsive | undefined;
export declare const getEasing: (easeMethod?: string | undefined) => TweenEasingFn;
export declare const showPreviousArrow: ({ prevArrow, infinite }: FadeProps | SlideProps | ZoomProps, currentIndex: number, moveSlides: ButtonClick) => ReactNode;
export declare const showNextArrow: (properties: FadeProps | SlideProps | ZoomProps, currentIndex: number, moveSlides: ButtonClick, responsiveSettings?: Responsive | undefined) => React.JSX.Element;
export declare const showIndicators: (props: FadeProps | SlideProps | ZoomProps, currentIndex: number, navigate: ButtonClick, responsiveSettings?: Responsive | undefined) => ReactNode;
