import { FC } from "react";
import AnimatedNumbers from "react-animated-numbers";
import style from "./collectionAnalytics.module.scss"
import { CollectionAnalyticsProps, CollectionAnalyticsTypeItem } from "./collectionAnalytics.type";

export const CollectionAnalytics: FC<CollectionAnalyticsProps> = ({ source }) => {
    return (
        <div className={style.collection}>
            {source.map((item: CollectionAnalyticsTypeItem) => {
                return (
                    <div className={style.item} key={Math.random() * Math.random()}>
                        <h3 className={style.title}>{item.title}</h3>
                        <div className={style.rank} style={{ color: item.color }}>
                            <AnimatedNumbers
                                animateToNumber={item.rank}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
