'use strict'

/*
 * serverless-response
 * Copyright(c) Leonardo Fachetti
 * MIT Licensed
 */

let DSL = (statusCode) => {
    return {
        body: (response) => {
            return {
                build: (cb) => {
                    cb(null, {
                        statusCode: statusCode,
                        body: JSON.stringify(response)
                    });
                }
            }
        }
    }
}

module.exports = {
    // 1xx Informational
    continue: () => {
        return DSL(100);
    },
    
    // 2xx Success
    ok: () => {
        return DSL(200);
    },
    created: () => {
        return DSL(201);
    },
    accepted: () => {
        return DSL(202);
    },
    noContent: () => {
        return DSL(204);
    },

    // 3xx Redirection
    movedPermanently: () => {
        return DSL(301);
    },
    found: () => {
        return DSL(302);
    },
    seeOther: () => {
        return DSL(303);
    },
    notModified: () => {
        return DSL(304);
    },
    useProxy: () => {
        return DSL(305);
    },
    switchProxy: () => {
        return DSL(306);
    },
    temporaryRedirect: () => {
        return DSL(307);
    },
    permanentRedirect: () => {
        return DSL(308);
    },

    // 4xx Client Error
    badRequest: () => {
        return DSL(400);
    },
    unauthorized: () => {
        return DSL(401);
    },
    paymentRequired: () => {
        return DSL(402);
    },
    forbidden: () => {
        return DSL(403);
    },
    notFound: () => {
        return DSL(404);
    },
    methodNotAllowed: () => {
        return DSL(405);
    },
    notAcceptable: () => {
        return DSL(406);
    },
    conflict: () => {
        return DSL(409);
    },
    preconditionFailed: () => {
        return DSL(412);
    },

    // 5xx Server Error
    internalServerError: () => {
        return DSL(500);
    },
    notImplemented: () => {
        return DSL(501);
    },

    // Custom
    status: (statusCode) => {
        return DSL(statusCode);
    },

    handler: (cb) => {
        return (event, context, callback) => {
            try {
                cb(event, context, callback);
            } catch(e) {
                console.error(e);
		callback(`[500] ${e.message}`);
            }
        }
    }
}
