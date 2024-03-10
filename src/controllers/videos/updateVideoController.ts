import {RequestWithParamsAndBody} from "../../types/common-types";
import {UpdateVideoModel, videoIdModel} from "../../models/videos";
import {db} from "../../db/db";
import {HTTP_STATUSES} from "../../app/settings";

export const updateVideo = (req: RequestWithParamsAndBody<videoIdModel, UpdateVideoModel>, res: any) => {
    let video = db.videos.find(c => c.id === +req.params.id);

    if (!video) {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
        return;
    }

    let {title, author, availableResolutions,canBeDownloaded, minAgeRestriction, publicationDate } = req.body;

    video.title = title || video.title;
    video.author = author || video.author;
    video.availableResolutions = availableResolutions || video.availableResolutions;
    video.canBeDownloaded = canBeDownloaded || video.canBeDownloaded;
    video.minAgeRestriction = minAgeRestriction || video.minAgeRestriction;
    video.publicationDate = publicationDate || video.publicationDate;

    res.status(HTTP_STATUSES.NO_CONTENT_204);
};
